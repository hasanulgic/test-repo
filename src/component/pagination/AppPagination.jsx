/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import Service from "./Service";

const pageSize = 2;

export default function AppPagination() {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    Service
      .getData({ from: pagination.from, to: pagination.to })
      .then((res) => {
        setPagination({ ...pagination, count: res.count })
      });
  }, [pagination.from, pagination.to]);

  const onPageChange = (page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from: from, to: to });
  };


  return (
    <Box
      justifyContent={"center"}
      alignItems="center"
      display="flex"
      sx={{
        margin: "20px 0px",
      }}
    >
      <Pagination
        sx={{
          opacity: "0.9"
        }}
        color="primary"
        shape="rounded"
        variant="outlined"
        count={Math.ceil(pagination.count / pageSize)}
        onChange={(event, value) => onPageChange(value)}
        disableRipple
      />
    </Box>
  );
}
