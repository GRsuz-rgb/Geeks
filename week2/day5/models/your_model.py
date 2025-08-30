from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class books(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    publication_year = db.Column(db.Integer, nullable=False)
    isbn = db.Column(db.String(13), unique=True, nullable=False)
    creation_time = db.Column(db.DateTime, default=db.func.current_timestamp())
    book_authors = db.relationship('book_author', backref='book', cascade='all, delete-orphan')

class authors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    book_authors = db.relationship('book_author', backref='author', cascade='all, delete-orphan')

class book_author(db.Model):
    book_id = db.Column(db.Integer, db.ForeignKey('book.id'), primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('author.id'), primary_key=True)