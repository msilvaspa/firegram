import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = ({ setSelectedImg }) => {
	const { docs } = useFirestore('images');

	return (
		<div className="img-grid">
			{docs &&
				docs.map((doc) => (
					<motion.div
						layout
						key={doc.id}
						className="img-wrap"
						whileHover={{ opacity: 1 }}
						onClick={() => setSelectedImg(doc.url)}
					>
						<motion.img
							src={doc.url}
							alt="uploaded pic"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default ImageGrid;
