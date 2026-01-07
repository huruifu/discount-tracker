import json
import logging
import psycopg
import azure.functions as func

from get_conn import get_connection_uri

http_trigger_bp = func.Blueprint()

@http_trigger_bp.function_name(name="HTTPTriggerGetDiscount")
@http_trigger_bp.route(route="discounts", auth_level=func.AuthLevel.ANONYMOUS)
def get_discounts(req: func.HttpRequest) -> func.HttpResponse:
    keyword = req.params.get("keyword", None)
    column_names = ["id", "store", "productLink", "imageLink", "description", "discountPercentage", "price", "originalPrice"]
    decimal_fields = ["price", "originalPrice"]
    conn_string = get_connection_uri()
    logging.info(f"Connecting to database with: {conn_string}")
    with psycopg.connect(conn_string) as conn:
        with conn.cursor() as cursor:
            if keyword:
                cursor.execute(f"SELECT * FROM discounts WHERE productLink ILIKE '%{keyword}%';")
            else:
                cursor.execute("SELECT * FROM discounts;")
            
            discounts = [
                {
                    col: float(val) if col in decimal_fields else val
                    for col, val in zip(column_names, row)
                }
                for row in cursor.fetchall()
            ]
    
    return func.HttpResponse(
        body=json.dumps(discounts),
        status_code=200,
    )