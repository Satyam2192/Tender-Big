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
        "razorpay_signature": fake.sha256(),
        "razorpay_payment_id": fake.uuid4(),
        "razorpay_subscription_id": fake.uuid4(),
        "userId": fake.uuid4(),
    }

    collection.insert_one(record)

print("Inserted 5 dummy records into MongoDB.")
