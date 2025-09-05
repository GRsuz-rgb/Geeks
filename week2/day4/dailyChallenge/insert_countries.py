import requirements
import psycopg2
import random
import os
from dotenv import load_dotenv

load_dotenv()

def get_connection():
    return psycopg2.connect(
        dbname = os.getenv("PGDATABASE", "countries"),
        user = os.getenv("PGUSER", "postgres"),
        password = os.dotenv("PGPASSWORD", "postgresql"),
        host = os.getenv("PGHOST", "localhost"),
        port = os.getenv("PGPORT", 5432)
    )





