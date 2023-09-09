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

# Function to generate a random status
def random_status():
    statuses = ["In Progress", "Completed", "On Hold", "Canceled"]
    return fake.random_element(elements=statuses)

# Generate and insert 20 random records
for _ in range(20):
    record = {
        "pnr": fake.uuid4(),
        "companyname": fake.company(),
        "detail": fake.sentence(),
        "value": round(random.uniform(100000, 10000000), 2),
        "status": random_status(),
        "country": fake.country(),
        "state": fake.state(),
        "city": fake.city(),
        "sector": fake.word(),
    }

    collection.insert_one(record)

print("Inserted 20 dummy records into MongoDB.")
