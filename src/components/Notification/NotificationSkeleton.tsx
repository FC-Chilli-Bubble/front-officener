import ContentLoader from "react-content-loader";


const NotificationSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 343 72"
    >
      <rect x="0" y="10" rx="8" ry="8" width="46" height="46" />
      <rect x="60" y="10" rx="4" ry="4" width="35" height="12" />
      <rect x="60" y="29" rx="4" ry="4" width="253" height="14" />
      <rect x="60" y="47" rx="4" ry="4" width="24" height="12" />
    </ContentLoader>
  );
};

export default NotificationSkeleton;