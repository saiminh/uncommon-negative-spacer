import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-negative-spacer',
      style: `
        margin-top: -${attributes.negativeSpaceBefore}${attributes.unitBefore};
        margin-bottom: -${attributes.negativeSpaceAfter}${attributes.unitAfter};
      `
    }) }>
			<InnerBlocks.Content />
		</div>
	);
}
