## Q1 How long did you spend on the coding test? 

I spent 3 days on the coding test, breaking the time into the following phases:

- **Planning** (Day 1):
*Spent time understanding the requirements and designing the structure of the application, including the components and their interactions.*

- **Initial Setup and Core Features** (Day 1):
*Created the foundational structure, including task creation, editing, and deletion functionalities. Implemented local storage to persist tasks.*

- **Search and Filter** (Day 2):
*Added dynamic search and filter features for easier task management, ensuring users can quickly locate tasks by title or priority.*

- **UI Enhancements** (Day 2):
*Focused on building a clean and responsive interface, with task boxes for better user experience.*

- **Testing and Debugging** (Day 3):
*Tested core functionalities, fixed bugs, and ensured smooth performance across different scenarios.*

<br>

## Q2 What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.


One of the most practical and frequently used features in JavaScript is the `localStorage` API. It provides a simple way to store key-value pairs in the browser, enabling data persistence across sessions without requiring a backend.

`localStorage` is especially useful for applications that need to maintain state, like task managers, where user data (e.g., tasks) can be saved and retrieved easily. The data is stored in the browser, making it accessible even after the page is refreshed or the browser is reopened.

Example Use Case:
*In my task management application, I used **localStorage** to save and retrieve tasks, ensuring users don’t lose their data between sessions.*

``` javascript
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    let loadedTasks = localStorage.getItem("tasks");

    let tasks = JSON.parse(loadedTasks);
   
    if (tasks) {
      if(tasks.length > 0){
        tasks.sort((a, b) => priorityOrder[a.urgency] - priorityOrder[b.urgency]);
        console.log(tasks);
      }
      setTasks(tasks);

    }
  }
```

<br>

## Q3  How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in a React application using only native tools or simple debugging methods, I would follow these steps:

- **Use React Developer Tools:**
Start by inspecting the application using the React DevTools extension. This tool allows me to analyze the component tree, check props and state, and identify unnecessary re-renders.

- **Console Logs for Debugging:**
Use `console.log()` strategically to trace data flow and ensure that state updates or props are passed correctly.
For performance issues, I would log the rendering of components to verify if any are rendering unnecessarily:
javascript

- **Check React’s Built-in Warnings:**
React provides helpful warnings in the console, such as notices for missing keys in lists or inefficient updates. Addressing these warnings can significantly improve performance.

- **Analyze State and Props:**
I’d examine the state and props passed to components to ensure only necessary data triggers re-renders. If excessive re-renders occur, I’d refactor using memoization with React.memo or useMemo.


**Experience**:
*In a previous project, I encountered performance issues caused by excessive re-renders in a list component. By analyzing with DevTools and refactoring the code using React.memo, I reduced re-rendering and improved load times significantly.*

<br>

## Q4 If you had more time, what additional features or improvements would you consider adding to the task management application?

Given more time, I would focus on enhancing the backend to improve scalability and functionality:

**Database Integration:**
Implement a backend using Node.js with MongoDB or PostgreSQL to store tasks securely, allowing for data persistence and multi-user support.

**User Authentication:**
Add JWT-based authentication to enable users to register, log in, and manage their individual task lists.

**Task Reminders:**
Integrate a reminder system using cron jobs to send email or push notifications for upcoming and overdue tasks.

<br>

Thank you for reviewing the project!
I’m Tanya Gupta, and I’m glad to have had the opportunity to work on this. If you have any questions or need further information, feel free to contact me at tanyagupta4108@gmail.com. I look forward to future collaborations and hope this project meets your expectations.

Best regards,
Tanya Gupta
tanyagupta4108@gmail.com
