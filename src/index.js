import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = ['core/group'];
const TEMPLATE = [
    ['core/group', {}, [
        ['core/heading', { level: 3 }],
        ['core/paragraph']
    ]]
];

// Custom SVG icon for the stacked cards block
const stackedCardsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M17.5 9V6a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v3H8V6a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v3h1.5Zm0 6.5V18a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2.5H8V18a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2.5h1.5ZM4 13h16v-1.5H4V13Z"></path>
    </svg>
);

registerBlockType('stacked-cards-block/stacked-cards', {
    icon: stackedCardsIcon,
    edit: function Edit({ attributes, setAttributes }) {
        const blockProps = useBlockProps();
        
        return (
            <div {...blockProps}>
                <div className="stacked-cards-wrapper">
                    <div className="stacked-cards">
                        <InnerBlocks
                            allowedBlocks={ALLOWED_BLOCKS}
                            template={TEMPLATE}
                            templateLock={false}
                        />
                    </div>
                </div>
            </div>
        );
    },
    save: function Save() {
        const blockProps = useBlockProps.save();
        
        return (
            <div {...blockProps}>
                <div className="stacked-cards-wrapper">
                    <div className="stacked-cards">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    }
}); 