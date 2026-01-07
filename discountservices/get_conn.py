import os
import urllib.parse

def get_connection_uri():
    dbhost = os.getenv("DBHOST")
    dbname = os.getenv("DBNAME")
    dbuser = urllib.parse.quote(os.environ['DBUSER'])
    dbpassword = os.getenv("DBPASSWORD")
    sslmode = os.getenv("SSLMODE")
    db_uri = f"host={dbhost} dbname={dbname} user={dbuser} password={dbpassword} sslmode={sslmode}"
    return db_uri