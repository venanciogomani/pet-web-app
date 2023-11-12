const Container = ({
  children
}) => {
return (
  // Container div with maximum width, centered horizontally and vertically
  <div className="max-w-[2520px] mx-auto xl:px-48 lg:px-24 md:px-12 px-0 h-screen">
      {/* Render children components inside the container */}
      {children}
  </div>
);
}

export default Container;
