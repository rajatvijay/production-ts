import React, { FC } from "react";

/**
 * AGENDA: Generic Types Inference
 */

type Column<RecordType> = {
  title: string;
  key: string;
  dataIndex: keyof RecordType;
  render?: Function;
};
type TableProps<RecordType> = {
  dataSource: RecordType[];
  columns: Column<RecordType>[];
};
function Table<RecordType>(props: TableProps<RecordType>) {
  return <table />;
}

type DataSource = {
  name: string;
  dateOfBirth: string;
  age: number;
};
const dataSource: DataSource[] = [
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
];

const App: FC = () => {
  return (
    <Table
      dataSource={dataSource}
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
          render: (value: any, record: any) => {
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
