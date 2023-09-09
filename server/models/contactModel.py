import random
from faker import Faker
from pymongo import MongoClient
from datetime import datetime, timedelta

# Initialize Faker
fake = Faker()

# MongoDB connection settings
mongo_uri = "mongodb://localhost:27017/tenderbig"
client = MongoClient(mongo_uri)
db = client["your-database-name"]
collection = db["your-collection-name"]

# Function to generate a random phone number
def random_phone_number():
    return fake.phone_number()

# Generate and insert 5 random records
for _ in range(5):
    datetime_start = datetime.now() - timedelta(days=3650)  # 10 years ago
    datetime_end = datetime.now()  # Current datetime

    record = {
        "userId": fake.uuid4(),
        "name": fake.name(),
        "company": fake.company(),
        "mobile": random_phone_number(),
        "email": fake.email(),
        "selectedService": fake.random_element(elements=("Service A", "Service B", "Service C")),
        "createdAt": fake.date_time_between_dates(
            datetime_start=datetime_start,
            datetime_end=datetime_end
        ),
    }

    collection.insert_one(record)

print("Inserted 5 dummy records into MongoDB.")
