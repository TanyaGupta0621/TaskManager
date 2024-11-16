import React, { useEffect, useState } from 'react';
import '../styles/SearchFilter.css';

function SearchFilter({ tasks }) {
  const [query, setQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  // Filter tasks based on query and priority
  useEffect(() => {
    const filtered = tasks.filter((task) => {
      const matchesQuery = task.title.toLowerCase().includes(query.toLowerCase()) ||
                           task.description.toLowerCase().includes(query.toLowerCase());
      const matchesPriority = priorityFilter === 'All' || task.urgency === priorityFilter;

      return matchesQuery && matchesPriority;
    });
    const arr = filtered.slice(0,4);

    setFilteredTasks(arr);
  }, [query, priorityFilter, tasks]);

  return (
    <div className="search-filter">
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="task-results">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div className="task-box" key={task.id}>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>Priority: {task.urgency}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No tasks match your search criteria.</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilter;
