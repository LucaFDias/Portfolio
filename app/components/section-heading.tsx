const SectionHeading = ({
  children
}:{
  children: React.ReactNode
}) => {
  return (
    <h2 className="text-3xl font-medium mb-10 mt-4">{children}</h2>
  )
}

export default SectionHeading