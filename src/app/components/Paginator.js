import React from "react";
import {Pagination, Row} from "react-bootstrap";
import Link from "./Link";

function Paginator({info, onSelect, link, elements = 7, size="lg"}) {
  if (!(onSelect || link)) {
    throw new Error('onSelect and link are undefined');
  }

  if (!info.totalPages || info.totalPages < 2) {
    return null;
  }

  const totalPages = info.totalPages;
  const currentPage = info.number + 1;
  const pagination = [];

  if (totalPages < elements) {
    for (let i = 1; i <= totalPages; i++) pagination.push(i);
  } else {
    if (currentPage - 3 <= 0) {
      for (let i = 1; i <= elements; i++) pagination.push(i);
    } else if (currentPage + 3 > totalPages) {
      for (let i = 1; i <= elements; i++) {
        const page = totalPages - (elements - i);
        pagination.push(page);
      }
    } else {
      let page = currentPage - 3;
      for (let i = 0; i < elements; i++) pagination.push(page + i);
    }
  }

  return (
    <Row className="justify-content-center">
      {
        onSelect ? (
          <Pagination size={size}>
            <Pagination.First onClick={() => onSelect(1)}/>
            <Pagination.Prev onClick={() => onSelect(currentPage-1)}/>
            {pagination.map((num, i) =>
              <Pagination.Item key={i} onClick={() => onSelect(num)} active={num === currentPage}>{num}</Pagination.Item>
            )}
            <Pagination.Next onClick={() => onSelect(currentPage+1)}/>
            <Pagination.Last onClick={() => onSelect(totalPages)}/>
          </Pagination>
        ) : (
          <Pagination size={size}>
            <Pagination.First as={Link} to={link + 1} href="!"/>
            <Pagination.Prev as={Link} to={link + (currentPage-1)} href="!"/>
            {pagination.map((num, i) =>
              <Pagination.Item as={Link} key={i} to={link + num} active={num === currentPage} href="!">{num}</Pagination.Item>
            )}
            <Pagination.Next as={Link} to={link + (currentPage+1)} href="!" />
            <Pagination.Last as={Link} to={link + totalPages} href="!" />
          </Pagination>
        )
      }

    </Row>
  )
}

export default Paginator;