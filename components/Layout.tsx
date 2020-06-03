type LayoutProps = {
	title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
	<div>
		<span>Home</span>
		<br />
		{children}
	</div>
)

export default Layout;
