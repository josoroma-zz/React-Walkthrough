/* ---------------------------------------------------------------------------*/

import React from 'react';

import {ListItem} from 'client/components/reuse/list-item';

/* ---------------------------------------------------------------------------*/

export const ListContainer = ({config, items}) => (
 <div className={config.style}>
   <h1 className={config.style + '-main-title'}>{config.title}</h1>
   <ul className={config.style + '-unordered-list'}>
     {items.map(function(item, i) {
       // We should use item.id as key.
       return <ListItem style={config.style} key={i} item={item} />;
     })}
   </ul>
 </div>
);

/* ---------------------------------------------------------------------------*/
