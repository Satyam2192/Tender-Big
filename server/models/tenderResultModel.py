import random
from faker import Faker
from datetime import datetime
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

# Generate and insert 100 random records
for _ in range(100):
    record = {
        "TenderId": fake.uuid4(),
        "userId": fake.uuid4(),
        "summary": fake.sentence(),
        "country": fake.country(),
        "state": fake.state(),
        "BRR": fake.word(),
        "Authority": fake.company(),
        "deadline": random_date("2023-01-01", "2023-12-31"),
        "TendorNo": fake.random_int(min=1000, max=9999),
        "description": fake.text(),
        "userCategory": fake.random_element(elements=("Category A", "Category B", "Category C")),
        "tenderValue": fake.random_element(elements=("Value 1", "Value 2", "Value 3")),
        "contractValue": fake.random_element(elements=("Contract 1", "Contract 2", "Contract 3")),
    }

    collection.insert_one(record)

print("Inserted 100 dummy records into MongoDB.")
