import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { TextControl, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

  const onChangeNegativeSpaceBefore = (negativeSpaceBefore) => {
    setAttributes({ negativeSpaceBefore });
  };
  const onChangeNegativeSpaceAfter = (negativeSpaceAfter) => {
    setAttributes({ negativeSpaceAfter });
  };

	return (
		<div { ...useBlockProps({
      className: 'uncommon-negative-spacer',
    }) } style={{ 
      marginTop: `-${attributes.negativeSpaceBefore}${attributes.unitBefore}`,
      marginBottom: `-${attributes.negativeSpaceAfter}${attributes.unitAfter}`
      }}>
      <InspectorControls key="setting">
        <div style={{
          padding: '1rem'
        }}>
          <TextControl
            label={__('Negative space before block')}
            value={ attributes.negativeSpaceBefore }
            type="number"
            min= {0}
            max= {1000}
            onChange={ onChangeNegativeSpaceBefore }
          />
          <SelectControl
            label="UnitBefore"
            value={ attributes.unitBefore }
            options={[
              { label: 'px', value: 'px' },
              { label: 'em', value: 'em' },
              { label: 'rem', value: 'rem' },
              { label: '%', value: '%' },
              { label: 'vh', value: 'vh' },
              { label: 'vw', value: 'vw' },
            ]}
            onChange={ ( unitBefore ) => setAttributes( { unitBefore } ) }
          />
          <TextControl
            label={__('Negative space after block')}
            value={ attributes.negativeSpaceAfter }
            type="number"
            min= {0}
            max= {1000}
            onChange={ onChangeNegativeSpaceAfter }
          />
          <SelectControl
            label="UnitAfter"
            value={ attributes.unitAfter }
            options={[
              { label: 'px', value: 'px' },
              { label: 'em', value: 'em' },
              { label: 'rem', value: 'rem' },
              { label: '%', value: '%' },
              { label: 'vh', value: 'vh' },
              { label: 'vw', value: 'vw' },
            ]}
            onChange={ ( unitAfter ) => setAttributes( { unitAfter } ) }
          />
        </div>
        
      </InspectorControls>
        <InnerBlocks />
		</div>
	);
}
