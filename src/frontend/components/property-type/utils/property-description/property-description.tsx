import { Box, Icon, Tooltip } from '@adminjs/design-system'
import React from 'react'

import { PropertyJSON } from '../../../../interfaces/index.js'
import allowOverride from '../../../../hoc/allow-override.js'

export type PropertyDescriptionProps = {
  property: PropertyJSON;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = (props) => {
  const { property } = props

  if (!property.description) { return null }
  const direction = property.custom?.tooltipDirection || 'top'

  return (
    <Box mx="sm" display="inline-flex">
      <Tooltip direction={direction} title={property.description} size="lg">
        <Box>
          <Icon icon="HelpCircle" color="info" />
        </Box>
      </Tooltip>
    </Box>
  )
}

const OverridablePropertyDescription = allowOverride(PropertyDescription, 'PropertyDescription')

export {
  OverridablePropertyDescription as default,
  OverridablePropertyDescription as PropertyDescription,
}
