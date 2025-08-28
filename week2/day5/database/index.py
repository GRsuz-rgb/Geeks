from psycopg2 import connect
from psycopg2.extras import RealDictConnection
import os
from dotenv import load_dotenv

load_dotenv()


def connect_to_db():
    try:
        conn = connect(
            host=os.getenv("localhost"),
            database=os.getenv("libraryDb"),
            user=os.getenv("postgres"),
            password=os.getenv("postgresql"),
            sslmode=os.getenv("PGSSLMODE"),
            connection_factory=RealDictConnection,
        )
        return conn
    except Exception as e:
        print(e)
        return None
