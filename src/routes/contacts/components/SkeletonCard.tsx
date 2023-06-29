import { Card, Skeleton } from "antd";

const SkeletonCard = () => {
  return (
    <Card
      data-testid="skeleton-card"
      hoverable
      cover={<div className="card-cover-skeleton"><Skeleton.Image active /></div>}
      actions={[
        <Skeleton.Button active size="small"/>,
        <Skeleton.Button active size="small"/>,
        <Skeleton.Button active size="small"/>,
      ]}
    >
      <Card.Meta 
        title={<Skeleton active />}
      />
    </Card>
  )
}

export default SkeletonCard;