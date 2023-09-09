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

# Function to generate a list of random strings
def generate_random_strings(count):
    return [fake.word() for _ in range(count)]

# Generate and insert 10 random records
for _ in range(10):
    record = {
        "sectors": generate_random_strings(random.randint(1, 5)),
        "products": generate_random_strings(random.randint(1, 5)),
        "departments": generate_random_strings(random.randint(1, 5)),
        "categories": generate_random_strings(random.randint(1, 5)),
        "licenses": generate_random_strings(random.randint(1, 5)),
        "AuctionMaterials": generate_random_strings(random.randint(1, 5)),
    }

    collection.insert_one(record)

print("Inserted 10 dummy records into MongoDB.")
