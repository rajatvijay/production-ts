import React, { FC } from "react";

/**
 * AGENDA: More type inference
 */

type Column<RecordType> = {
  title: string;
  key: string;
  dataIndex: keyof RecordType;
  render?: (value: any, record: RecordType) => JSX.Element;
};
type TableProps<RecordType> = {
  dataSource: RecordType[];
  columns: Column<RecordType>[];
};
function Table<RecordType>(props: TableProps<RecordType>) {
  return <table />;
}

const App: FC = () => {
  return (
    <Table
      dataSource={[
        {
          name: "Dan",
          dateOfBirth: "1994-10-02",
          age: 24,
        },
        {
          name: "John",
          dateOfBirth: "1996-11-02",
          age: 24,
        },
      ]}
      columns={[
        {
          title: "Name",
          key: "name", // unique key for the column
          dataIndex: "name", // key from the data source
        },
        {
          title: "Date Of Birth",
          key: "dateOfBirth",
          dataIndex: "dateOfBirth",
          render: (value: string, record) => {
            // render method to create custom UI
            return (
              <span>
                {record.name} - {new Date(value).getFullYear()}
              </span>
            );
          },
        },
      ]}
    />
  );
};

export { App };
