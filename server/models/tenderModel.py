import random
from faker import Faker
from datetime import datetime, timedelta
from pymongo import MongoClient

# Initialize Faker
fake = Faker()

# MongoDB connection settings
mongo_uri = "mongodb://localhost:27017/tenderbig"
client = MongoClient(mongo_uri)
db = client["your-database-name"]
collection = db["your-collection-name"]

# Function to generate a random date within a range
def random_date(start_date, end_date):
    return fake.date_time_between_dates(datetime.strptime(start_date, "%Y-%m-%d"), datetime.strptime(end_date, "%Y-%m-%d"))

# Function to generate a random district name (you can customize this)
def random_district():
    districts = ["District A", "District B", "District C", "District D"]
    return random.choice(districts)

# Generate and insert 20 random records
for _ in range(20):
    record = {
        "tenderId": fake.uuid4(),
        "userId": fake.uuid4(),
        "summary": fake.sentence(),
        "sector": fake.word(),
        "cpvNo": fake.random_element(elements=("CPV 123", "CPV 456", "CPV 789")),
        "procurementSummary": {
            "country": fake.country(),
            "state": fake.state(),
            "city": fake.city(),
            "district": random_district(),  # Use random_district() to generate district names
            "summary": fake.text(),
            "deadline": random_date("2023-01-01", "2023-12-31"),
        },
        "otherInformation": {
            "noticeType": fake.random_element(elements=("Notice 1", "Notice 2", "Notice 3")),
            "totNo": fake.random_int(min=1000, max=9999),
            "documentNo": fake.random_int(min=1000, max=9999),
            "competition": fake.word(),
            "financier": fake.company(),
            "ownership": fake.word(),
            "tenderValue": fake.random_element(elements=("Value 1", "Value 2", "Value 3")),
        },
        "purchaserDetail": {
            "purchaser": fake.company(),
            "address": fake.address(),
            "city": fake.city(),
            "state": fake.state(),
            "pin": fake.zipcode(),
            "telfax": fake.phone_number(),
            "email": fake.email(),
            "url": fake.url(),
        },
        "tenderDetail": {
            "description": fake.text(),
            "publishDate": random_date("2023-01-01", "2023-12-31"),
            "organization": fake.company(),
            "noticeType": fake.random_element(elements=("Notice 1", "Notice 2", "Notice 3")),
        },
        "userCategory": fake.random_element(elements=("subcontractor", "contractor", "government", "gem", "private")),
        "product": fake.word(),
        "docurl": fake.url(),
        "active": fake.boolean(chance_of_getting_true=50),
        "approvedStatus": fake.boolean(chance_of_getting_true=50),
    }

    collection.insert_one(record)

print("Inserted 20 dummy records into MongoDB.")
