from sqlalchemy.orm import Session
from app import models, schemas

# Create a new task
def create_task(db: Session, task: schemas.TaskCreate) -> models.Task:
    db_task = models.Task(**task.dict())  # Convert Pydantic schema to ORM object
    db.add(db_task)
    db.commit()
    db.refresh(db_task)  # Refresh from DB to get ID and defaults
    return db_task

# Get all tasks
def get_tasks(db: Session) -> list[models.Task]:
    return db.query(models.Task).all()

# Get a single task by ID
def get_task(db: Session, task_id: int) -> models.Task | None:
    return db.query(models.Task).filter(models.Task.id == task_id).first()

# Delete a task
def delete_task(db: Session, task_id: int) -> bool:
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if task is None:
        return False
    db.delete(task)
    db.commit()
    return True

# Update a task's completion and progress
def update_task(db: Session, task_id: int, updated_data: dict) -> models.Task | None:
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if task is None:
        return None
    for key, value in updated_data.items():
        setattr(task, key, value)
    db.commit()
    db.refresh(task)
    return task