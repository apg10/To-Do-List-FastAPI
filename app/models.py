from sqlalchemy import Column, Integer, String, Boolean
from app.database import Base

# Define the Task table/model
class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)  # Unique ID
    title = Column(String, index=True)                  # Task title
    description = Column(String, nullable=True)         # Optional description
    is_completed = Column(Boolean, default=False)       # Completion status
    progress = Column(String, default="starting")       # Progress level: starting, in_progress, almost_done
