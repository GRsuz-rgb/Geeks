import requests
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

def fetch_countries():
    url = "https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

def insert_countries(countries):
    conn = get_connection()
    cur = conn.cursor()
    
    for country in countries:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", ["Unknown"])[0] if country.get("capital") else "Unknown"
        flag = country.get("flag", "")
        subregion = country.get("subregion", "Unknown")
        population = country.get("population", 0)

        cur.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)    )
            VALUES (%s, %s, %s, %s, %s)
            """, (name, capital, flag, subregion, population))
    
    conn.commit()
    conn.close()


if __name__ == "__main__":
    all_countries = fetch_countries()
    random_countries = random.sample(all_countries, 10) # 10 random countries
    insert_countries(random_countries) #insert 10 picked countries
    print ("countries inserted to database successfully")

