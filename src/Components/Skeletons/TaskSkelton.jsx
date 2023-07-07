
import { Avatar, Card, Skeleton, Divider, Space } from 'antd';
import { useState } from 'react';
const { Meta } = Card;

const style = {
  width: 300,
  marginTop: 16,
}

const style1 = {
  display: 'flex', flexDirection: 'row', justifyContent: 'space-around'
}

function TaskSkelton() {

  const [loading, setLoading] = useState(true);


  return (

    <>
      <Space style={{ ...style1 }} >
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Space>
      <Divider />
      <Space style={{ ...style1 }} >
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Space>
      <Divider />
      <Space style={{ ...style1 }} >
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
        <Card
          style={{ ...style }}
        >
          <Skeleton loading={loading} avatar active
            paragraph={{
              rows: 4,
            }}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
      </Space>
      <Divider />
    </>
  )
}

export default TaskSkelton;

