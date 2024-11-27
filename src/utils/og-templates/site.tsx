import { SITE } from '@config';

export default () => {
	return (
		// Configure via: https://og-playground.vercel.app/
		<div
			style={{
				background: SITE.secondaryColor,
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: '-1px',
					right: '-1px',
					border: '4px solid #000',
					background: SITE.tertiaryColor,
					opacity: '0.9',
					borderRadius: '4px',
					display: 'flex',
					justifyContent: 'center',
					margin: '2.5rem',
					width: '88%',
					height: '80%',
				}}
			/>

			<div
				style={{
					border: '4px solid #000',
					background: SITE.primaryColor,
					borderRadius: '4px',
					display: 'flex',
					justifyContent: 'center',
					margin: '2rem',
					width: '88%',
					height: '80%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
						margin: '20px',
						width: '90%',
						height: '90%',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '90%',
							maxHeight: '90%',
							width: '100%',
							maxWidth: '100%',
							overflow: 'visible',
							textAlign: 'center',
						}}
					>
						<p style={{ fontSize: 72, fontWeight: 'bold' }}>{SITE.title}</p>
						<p style={{ fontSize: 28 }}>{SITE.desc}</p>
					</div>

					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							width: '100%',
							marginBottom: '8px',
							fontSize: 28,
						}}
					>
						<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
							{new URL(SITE.website).hostname}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
