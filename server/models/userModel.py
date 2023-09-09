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

# Function to generate a random phone number
def random_phone_number():
    return random.randint(1000000000, 9999999999)

# Generate and insert 5 random records
for _ in range(5):
    record = {
        "userId": fake.uuid4(),
        "name": fake.name(),
        "email": fake.email(),
        "password": fake.password(length=12),
        "userRole": fake.random_element(elements=("admin", "employee", "hr", "user")),
        "phoneNumber": random_phone_number(),
        "subscription": {
            "id": fake.uuid4(),
            "status": fake.random_element(elements=("active", "inactive")),
            "plan": fake.random_element(elements=("OneState", "FiveStates", "AllIndia", "Global")),
            "stateNames": [fake.state() for _ in range(random.randint(1, 5))]
        },
        "country": fake.country(),
        "state": fake.state(),
        "city": fake.city(),
        "ResetPasswordToken": fake.uuid4(),
        "ResetPasswordEcpire": fake.date_time_this_decade().isoformat()
    }

    collection.insert_one(record)

print("Inserted 5 dummy records into MongoDB.")
