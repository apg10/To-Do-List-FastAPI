from pydantic import BaseModel
from typing import Optional

# Base fields shared by create and read models
class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    progress: Optional[str] = "starting"  # Progress can be updated later

# Schema for creating a new task
class TaskCreate(TaskBase):
    pass

# Schema for returning task info (includes ID and status)
class Task(TaskBase):
    id: int
    is_completed: bool

    class Config:
        orm_mode = True  # Enables conversion from ORM models to Pydantic
