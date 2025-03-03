import { SITE } from '@config';
import type { CollectionEntry } from 'astro:content';

export default (post: CollectionEntry<'blog'>) => {
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
							height: '90%',
							maxHeight: '90%',
							width: '100%',
							maxWidth: '100%',
							overflow: 'hidden',
						}}
					>
						<p style={{ fontSize: 72, fontWeight: 'bold' }}>{post.data.title}</p>
						<p style={{ fontSize: 32 }}>{post.data.description}</p>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							marginBottom: '8px',
							fontSize: 28,
						}}
					>
						<span>
							by{' '}
							<span
								style={{
									color: 'transparent',
								}}
							>
								"
							</span>
							<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>{post.data.author}</span>
						</span>

						<span style={{ overflow: 'hidden', fontWeight: 'bold' }}>{SITE.blogURL}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
