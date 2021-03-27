import {ListGroup} from "react-bootstrap";
import React from "react";


/**
 * @param onSelect - callback with name of selected item
 * @param data {[{name: String, disabled: Boolean}]}
 * @param selected - selected item name
 * @param initial - initial value, if you want make initial value always selectable
 * @return {JSX.Element}
 * @constructor
 */
function Selector({onSelect, data, selected, initial}) {

  const onClick = (item) => {
    if (!item.disabled || item.name === initial) {
      onSelect(item.name);
    }
  }

  return (
    <ListGroup as={"ul"}>
      {data.map((it, i) =>
        <ListGroup.Item disabled={it.name !== initial && it.disabled} key={i} active={it.name === selected}
                        onClick={() => onClick(it)}>
          {it.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
}

export default Selector;