import time
import re
import pandas as pd
from selenium import webdriver
from bs4 import BeautifulSoup

def fetch_amazon_deals():
    """Fetches Amazon deals page and extracts product information."""
    url = 'https://www.amazon.ca/deals?ref_=nav_cs_gb'
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--headless")
    with webdriver.Chrome(options=chrome_options) as driver:
        driver.maximize_window()
        driver.get(url)
        last_height = 0
        
        count = 15
        products = []
        # Amazon loads products dynamically as you scroll, so we scroll down multiple times
        while count >= 0:
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            product_div_elements = soup.find_all('div', attrs={'data-testid': 'product-card'})
            for product_div in product_div_elements:
                products.append(extract_product(product_div))
            
            driver.execute_script('window.scrollBy(0, 1000)')
            time.sleep(4)
            new_height = driver.execute_script('return document.body.scrollHeight')
            if new_height == last_height:
                break
            last_height = new_height
            count -= 1
    return pd.DataFrame(products)

        
def extract_product(product_div_element):
    """Extracts product information from a given product div element."""
    # Extract product page link
    product_info_link = product_div_element.find('a', attrs={'data-testid': 'product-card-link'})['href']
    # Extract image link
    image_links = product_div_element.find('source', attrs={'type': 'image/jpg'})['srcset']
    image_link = image_links.split(',\n')[0].replace(' 1x', '')
    # Extract product description
    product_description = product_div_element.find('span', class_='a-truncate-cut').get_text().strip()
    # Extract discount percentage
    discount_text = product_div_element.find('span', class_='a-size-mini').get_text().strip()
    discount_perc = int(re.findall(r'-?\d*\.?\d+', discount_text)[0])
    # Extract price and original price
    prices = product_div_element.select('span.a-price span.a-offscreen')
    price_text = prices[0].get_text().strip()
    original_price_text = prices[1].get_text().strip()
    price = float(re.findall(r'-?\d*\.?\d+', price_text)[0])
    original_price = float(re.findall(r'-?\d*\.?\d+', original_price_text)[0])
    return {
        'productLink': product_info_link,
        'imageLink': image_link,
        'description': product_description,
        'discountPercentage': discount_perc,
        'price': price,
        'originalPrice': original_price
    }