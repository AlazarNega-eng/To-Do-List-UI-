# Simple To-Do List UI

A basic web application that allows users to manage a list of tasks. Built with plain HTML, CSS, and JavaScript.

## Features

*   **View Tasks**: Displays a list of tasks.
*   **Add Task**: Users can add new tasks to the list.
*   **Mark as Completed**: Tasks can be marked as completed, which visually distinguishes them (e.g., strikethrough and different background).
*   **Delete Task**: Users can remove tasks from the list.
*   **Filter Tasks**:
    *   **All**: Shows all tasks.
    *   **Pending**: Shows only tasks that are not yet completed.
    *   **Completed**: Shows only tasks that have been marked as completed.
*   **Persistent (Session Only)**: Task data is hardcoded in JavaScript and managed in memory. Data will reset on page refresh.

## Technologies Used

*   HTML5
*   CSS3
*   Plain JavaScript 

## How to Run

1.  Clone this repository or download the files (`index.html`, `style.css`, `script.js`).
2.  Open the `index.html` file in your web browser.

    ```bash
    # If you have cloned the repository, navigate to the directory
    # cd path/to/simple-todo-list-ui
    ```
    Then, simply open `index.html` from your file explorer, or if you have a simple HTTP server (like Python's):
    ```bash
    # (Optional) Using Python's built-in HTTP server
    python -m http.server
    ```
    And navigate to `http://localhost:8000` (or the port specified) in your browser.

## File Structure

*   `index.html`: The main HTML structure of the application.
*   `style.css`: Contains all the CSS rules for styling the application.
*   `script.js`: Handles the application logic, including task management and DOM manipulation.
*   `README.md`: This file, providing information about the project.

## Example Task Data Structure (in `script.js`)

```javascript
const tasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true }
    // ... more tasks
];

---

**To Use This:**

1.  Save each code block into its respective file (`index.html`, `style.css`, `script.js`, `README.md`) in the same directory.
2.  Open `index.html` in your web browser.

You should now have a working To-Do list application!
