import React from 'react';

const ListPage = ({ action, deleteAction }) => {
  return (
    <div>
      <h2>리스트 페이지</h2>
      <ul>
        {action.map((action) => (
          <li key={action.id}>
            {action.title}-{action.general}-{action.data}
            <button onClick={() => deleteAction(action.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;
