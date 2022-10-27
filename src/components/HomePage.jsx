import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Card } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
function HomePage() {
  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stat
      </Title>

      <Row>
        <Col span={6}>
          <Card
            style={{
              width: 200,
            }}
          >
            <Statistic title="Total Cryptocurrencies" value="5" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 200,
            }}
          >
            <Statistic title="Total Exchanges" value="5" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 200,
            }}
          >
            <Statistic title="Total Market Cap" value="5" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              width: 200,
            }}
          >
            <Statistic title="Total 24h Volume" value="5" />
          </Card>
        </Col>
        {/* <Col span={6}>
          <Card
            style={{
              width: 200,
            }}
          >
            <Statistic title="Total Cryptocurrencies" value="5" />
          </Card>
        </Col> */}
      </Row>
    </>
  );
}

export default HomePage;
