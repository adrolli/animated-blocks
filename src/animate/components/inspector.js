/**
 * Dependencies
 */
const { __ } = wp.i18n;
const {
	InspectorControls,
} = wp.editor;

const {
	PanelBody,
	PanelRow,
	TextControl,
	SelectControl,
	ToggleControl,
	RangeControl,
} = wp.components;
const { Fragment } = wp.element;

/**
 * @param {object} props component
 * @returns {object} Component
 */
const Inspector = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		animation,
		customClass,
		delay,
		threshold,
		hideEl,
	} = attributes;
	
	// Inspector Controls
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Animation Settings' ) } initialOpen={ false } >
		
				<PanelRow>
					<SelectControl
	            label={ __( 'Animation' ) }
	            value={ animation }
	            options={ [
                { value: '', label: __( 'None' ) },
                { value: 'bounce', label: __( 'bounce' ) },
                { value: 'flash', label: __( 'flash' ) },
                { value: 'pulse', label: __( 'pulse' ) },
                { value: 'rubberBand', label: __( 'rubberBand' ) },
                { value: 'shake', label: __( 'shake' ) },
                { value: 'headShake', label: __( 'headShake' ) },
                { value: 'swing', label: __( 'swing' ) },
                { value: 'tada', label: __( 'tada' ) },
                { value: 'wobble', label: __( 'wobble' ) },
                { value: 'jello', label: __( 'jello' ) },
                { value: 'bounceIn', label: __( 'bounceIn' ) },
                { value: 'bounceInDown', label: __( 'bounceInDown' ) },
                { value: 'bounceInLeft', label: __( 'bounceInLeft' ) },
                { value: 'bounceInRight', label: __( 'bounceInRight' ) },
                { value: 'bounceInUp', label: __( 'bounceInUp' ) },
                { value: 'bounceOut', label: __( 'bounceOut' ) },
                { value: 'bounceOutDown', label: __( 'bounceOutDown' ) },
                { value: 'bounceOutLeft', label: __( 'bounceOutLeft' ) },
                { value: 'bounceOutRight', label: __( 'bounceOutRight' ) },
                { value: 'bounceOutUp', label: __( 'bounceOutUp' ) },
                { value: 'fadeIn', label: __( 'fadeIn' ) },
                { value: 'fadeInDown', label: __( 'fadeInDown' ) },
                { value: 'fadeInDownBig', label: __( 'fadeInDownBig' ) },
                { value: 'fadeInLeft', label: __( 'fadeInLeft' ) },
                { value: 'fadeInLeftBig', label: __( 'fadeInLeftBig' ) },
                { value: 'fadeInRight', label: __( 'fadeInRight' ) },
                { value: 'fadeInRightBig', label: __( 'fadeInRightBig' ) },
                { value: 'fadeInUp', label: __( 'fadeInUp' ) },
                { value: 'fadeInUpBig', label: __( 'fadeInUpBig' ) },
                { value: 'fadeOut', label: __( 'fadeOut' ) },
                { value: 'fadeOutDown', label: __( 'fadeOutDown' ) },
                { value: 'fadeOutDownBig', label: __( 'fadeOutDownBig' ) },
                { value: 'fadeOutLeft', label: __( 'fadeOutLeft' ) },
                { value: 'fadeOutLeftBig', label: __( 'fadeOutLeftBig' ) },
                { value: 'fadeOutRight', label: __( 'fadeOutRight' ) },
								{ value: 'fadeOutRightBig', label: __( 'fadeOutRightBig' ) },
								{ value: 'fadeOutUp', label: __( 'fadeOutUp' ) },
								{ value: 'fadeOutUpBig', label: __( 'fadeOutUpBig' ) },
								{ value: 'flipInX', label: __( 'flipInX' ) },
								{ value: 'flipInY', label: __( 'flipInY' ) },
								{ value: 'flipOutX', label: __( 'flipOutX' ) },
								{ value: 'flipOutY', label: __( 'flipOutY' ) },
								{ value: 'lightSpeedIn', label: __( 'lightSpeedIn' ) },
								{ value: 'lightSpeedOut', label: __( 'lightSpeedOut' ) },
								{ value: 'rotateIn', label: __( 'rotateIn' ) },
								{ value: 'rotateInDownLeft', label: __( 'rotateInDownLeft' ) },
								{ value: 'rotateInDownRight', label: __( 'rotateInDownRight' ) },
								{ value: 'rotateInUpLeft', label: __( 'rotateInUpLeft' ) },
								{ value: 'rotateInUpRight', label: __( 'rotateInUpRight' ) },
								{ value: 'rotateOut', label: __( 'rotateOut' ) },
								{ value: 'rotateOutDownLeft', label: __( 'rotateOutDownLeft' ) },
								{ value: 'rotateOutDownRight', label: __( 'rotateOutDownRight' ) },
								{ value: 'rotateOutUpLeft', label: __( 'rotateOutUpLeft' ) },
								{ value: 'rotateOutUpRight', label: __( 'rotateOutUpRight' ) },
								{ value: 'hinge', label: __( 'hinge' ) },
								{ value: 'jackInTheBox', label: __( 'jackInTheBox' ) },
								{ value: 'rollIn', label: __( 'rollIn' ) },
								{ value: 'rollOut', label: __( 'rollOut' ) },
								{ value: 'zoomIn', label: __( 'zoomIn' ) },
								{ value: 'zoomInDown', label: __( 'zoomInDown' ) },
								{ value: 'zoomInLeft', label: __( 'zoomInLeft' ) },
								{ value: 'zoomInRight', label: __( 'zoomInRight' ) },
								{ value: 'zoomInUp', label: __( 'zoomInUp' ) },
								{ value: 'zoomOut', label: __( 'zoomOut' ) },
								{ value: 'zoomOutDown', label: __( 'zoomOutDown' ) },
								{ value: 'zoomOutLeft', label: __( 'zoomOutLeft' ) },
								{ value: 'zoomOutRight', label: __( 'zoomOutRight' ) },
								{ value: 'zoomOutUp', label: __( 'zoomOutUp' ) },
								{ value: 'slideInDown', label: __( 'slideInDown' ) },
								{ value: 'slideInLeft', label: __( 'slideInLeft' ) },
								{ value: 'slideInRight', label: __( 'slideInRight' ) },
								{ value: 'slideInUp', label: __( 'slideInUp' ) },
								{ value: 'slideOutDown', label: __( 'slideOutDown' ) },
								{ value: 'slideOutLeft', label: __( 'slideOutLeft' ) },
								{ value: 'slideOutRight', label: __( 'slideOutRight' ) },
								{ value: 'slideOutUp', label: __( 'slideOutUp' ) },
	            ] }
	            onChange={ animation => setAttributes( { animation } ) }
	        />
        </PanelRow>
        
        
        <PanelRow>
            <TextControl
                label={ __( 'Custom CSS Class' ) }
                value={ customClass }
                onChange={ customClass => setAttributes( { customClass } ) }
            />
        </PanelRow>
        
        <PanelRow>
            <TextControl
                label={ __( 'Animation Delay' ) }
                help={ __( 'Enter in milliseconds' ) }
                value={ delay }
                onChange={ delay => setAttributes( { delay } ) }
            />
        </PanelRow>
        
        <RangeControl
            beforeIcon="arrow-left-alt2"
            afterIcon="arrow-right-alt2"
            label={ __( 'Threshold' ) }
            value={ threshold }
            onChange={ threshold => setAttributes( { threshold } ) }
            min={ 1 }
            max={ 100 }
        />   
        
        <ToggleControl
            label={ __( 'Start at 0 opacity' ) } 
            checked={ hideEl }
            onChange={ hideEl => setAttributes( { hideEl } ) }
        />

			</PanelBody>
				
		</InspectorControls>
	);
};

export default Inspector;
