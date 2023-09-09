import random
from faker import Faker
from pymongo import MongoClient

# Initialize Faker
fake = Faker()

# MongoDB connection settings
mongo_uri = "mongodb://localhost:27017/tenderbig"
client = MongoClient(mongo_uri)
db = client["your-database-name"]
collection = db["your-collection-name"]

# Generate and insert 5 random records
for _ in range(5):
    record = {
        "formName": fake.word(),
        "price": round(random.uniform(10, 100), 2),  # Generates a random float between 10 and 100 with 2 decimal places
    }

    collection.insert_one(record)

print("Inserted 5 dummy records into MongoDB.")
