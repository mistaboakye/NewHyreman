import BootstrapPagination from "react-bootstrap/Pagination";

function Pagination() {
  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev />
      <BootstrapPagination.Item className="item" active>{1}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{2}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{3}</BootstrapPagination.Item>
      <BootstrapPagination.Item>{4}</BootstrapPagination.Item>
      <BootstrapPagination.Next />
    </BootstrapPagination>
  );
}

export default Pagination;
