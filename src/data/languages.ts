export const languages = [
  {
    id: "html",
    name: "HTML",
    description: "The standard markup language for creating web pages and applications",
    topics: [
      {
        id: "html-basics",
        title: "HTML Basics",
        description: "Understanding the fundamental structure of HTML documents",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the main content.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>`,
        explanation: "HTML documents follow a structured hierarchy with essential elements like `<!DOCTYPE>`, `<html>`, `<head>`, and `<body>`. Semantic elements like `<header>`, `<nav>`, `<main>`, and `<footer>` help organize content meaningfully."
      },
      {
        id: "html-forms",
        title: "Forms & Input Elements",
        description: "Creating interactive forms for user input",
        code: `<form action="/submit" method="POST">
    <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
    </div>
    
    <div class="form-group">
        <label for="priority">Priority:</label>
        <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
    </div>
    
    <button type="submit">Submit</button>
</form>`,
        explanation: "HTML forms collect user input using various form controls. The `<form>` element contains input fields, labels, and buttons. Different input types (`text`, `email`, `password`, etc.) serve specific purposes. The `required` attribute ensures field completion before submission."
      }
    ]
  },
  {
    id: "css",
    name: "CSS",
    description: "Cascading Style Sheets for styling web pages",
    topics: [
      {
        id: "css-selectors",
        title: "Selectors & Specificity",
        description: "Understanding CSS selectors and how specificity works",
        code: `/* Element Selector */
p {
    color: #333;
    line-height: 1.6;
}

/* Class Selector */
.card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* ID Selector */
#header {
    position: sticky;
    top: 0;
    z-index: 100;
}

/* Combinators */
.card > .title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Pseudo-classes */
.button:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
}

/* Attribute Selector */
input[type="submit"] {
    background: #007bff;
    color: white;
    border: none;
}`,
        explanation: "CSS selectors target HTML elements for styling. Specificity determines which styles are applied when multiple rules conflict. The hierarchy from most to least specific: inline styles, IDs, classes/attributes/pseudo-classes, elements."
      },
      {
        id: "css-flexbox",
        title: "Flexbox Layout",
        description: "Modern CSS layout with Flexbox",
        code: `.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.item {
    flex: 1;
    min-width: 200px;
    padding: 1rem;
}

/* Responsive Flex Layout */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    
    .item {
        width: 100%;
    }
}

/* Nested Flex Containers */
.card {
    display: flex;
    flex-direction: column;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}`,
        explanation: "Flexbox is a one-dimensional layout model that helps distribute space and align content within containers. Properties like `justify-content`, `align-items`, and `flex` control how items are positioned and sized."
      }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "A versatile programming language for web development",
    topics: [
      {
        id: "js-basics",
        title: "Core Concepts",
        description: "Essential JavaScript concepts and syntax",
        code: `// Variables and Data Types
let name = "John";           // String
const age = 25;             // Number
let isActive = true;        // Boolean
let user = {                // Object
    name: "John",
    age: 25,
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
};
let numbers = [1, 2, 3, 4]; // Array

// Template Literals
const message = \`Welcome \${name}! You are \${age} years old.\`;

// Destructuring
const { name: userName, age: userAge } = user;
const [first, second, ...rest] = numbers;

// Spread Operator
const newArray = [...numbers, 5, 6];
const updatedUser = { ...user, location: "New York" };`,
        explanation: "JavaScript's core features include variables, data types, template literals, destructuring, and the spread operator. These fundamentals form the basis for more advanced JavaScript programming."
      },
      {
        id: "js-async",
        title: "Asynchronous JavaScript",
        description: "Working with Promises, async/await, and API calls",
        code: `// Promise Example
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id, name: "John Doe" };
            resolve(user);
        }, 1000);
    });
}

// Async/Await
async function getUser(id) {
    try {
        const user = await fetchUser(id);
        console.log(user);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Fetch API
async function fetchPosts() {
    try {
        const response = await fetch('https://api.example.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch posts:", error);
        throw error;
    }
}

// Promise.all
async function fetchMultipleUsers(ids) {
    const promises = ids.map(id => fetchUser(id));
    const users = await Promise.all(promises);
    return users;
}`,
        explanation: "Asynchronous JavaScript allows non-blocking operations using Promises and async/await syntax. This is crucial for handling API calls, file operations, and other time-consuming tasks without blocking the main thread."
      }
    ]
  },
  {
    id: "python",
    name: "Python",
    description: "A readable and powerful general-purpose programming language",
    topics: [
      {
        id: "py-basics",
        title: "Python Fundamentals",
        description: "Core Python concepts and syntax",
        code: `# Variables and Data Types
name = "Alice"       # String
age = 30            # Integer
height = 1.75       # Float
is_student = True   # Boolean

# Lists and List Comprehension
numbers = [1, 2, 3, 4, 5]
squares = [n ** 2 for n in numbers]

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "skills": ["Python", "Data Science"]
}

# Functions with Type Hints
from typing import List, Dict

def calculate_average(numbers: List[float]) -> float:
    return sum(numbers) / len(numbers)

# Classes
class Student:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
    
    def introduce(self) -> str:
        return f"Hi, I'm {self.name} and I'm {self.age} years old."`,
        explanation: "Python's clean syntax and powerful features make it ideal for beginners and professionals. Type hints, list comprehensions, and object-oriented programming are key features that enhance code readability and maintainability."
      },
      {
        id: "py-advanced",
        title: "Advanced Python",
        description: "Advanced Python features and patterns",
        code: `# Decorators
def timer(func):
    from time import time
    def wrapper(*args, **kwargs):
        start = time()
        result = func(*args, **kwargs)
        end = time()
        print(f"{func.__name__} took {end-start:.2f} seconds")
        return result
    return wrapper

@timer
def process_data(data: list) -> list:
    return [x * 2 for x in data]

# Context Managers
class FileHandler:
    def __init__(self, filename: str, mode: str):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# Generators
def fibonacci(n: int):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Type Hints with Protocols
from typing import Protocol, Iterator

class Drawable(Protocol):
    def draw(self) -> None: ...

def render(shapes: Iterator[Drawable]) -> None:
    for shape in shapes:
        shape.draw()`,
        explanation: "Advanced Python features include decorators for modifying function behavior, context managers for resource handling, generators for memory-efficient iteration, and protocols for structural subtyping."
      }
    ]
  },
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces",
    topics: [
      {
        id: "react-basics",
        title: "React Fundamentals",
        description: "Core React concepts and components",
        code: `// Functional Component with Hooks
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`,
        explanation: "React components use hooks like `useState` and `useEffect` for state management and side effects. TypeScript adds type safety to props and state. Components can fetch data and render different UI states based on loading and error conditions."
      },
      {
        id: "react-advanced",
        title: "Advanced React Patterns",
        description: "Advanced React patterns and optimization techniques",
        code: `// Custom Hook
import { useState, useCallback, useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

function usePagination({
  totalItems,
  itemsPerPage,
  initialPage = 1
}: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(() => 
    Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );

  const nextPage = useCallback(() => {
    setCurrentPage(page => Math.min(page + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage(page => Math.max(page - 1, 1));
  }, []);

  const pageItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }, [currentPage, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    ...pageItems
  };
}

// Higher-Order Component
function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return class ErrorBoundary extends React.Component<P, { hasError: boolean }> {
    state = { hasError: false };

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
      console.error('Error caught:', error, info);
    }

    render() {
      if (this.state.hasError) {
        return <div>Something went wrong</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}`,
        explanation: "Advanced React patterns include custom hooks for reusable logic, higher-order components for cross-cutting concerns, and performance optimizations with `useMemo` and `useCallback`. These patterns help create maintainable and efficient React applications."
      }
    ]
  }
];