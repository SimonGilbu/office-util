# ThemeSelector

The themeselector is a VBA based addin that uses shadow-mapping and color-patterns to enable
multi-color options for layouts. the general idea is to create a pattern, and then include a shape
with the pattern name in the slide you want said pattern applied to.

the way it works is that a factory is called with a pattern-id to create the desired pattern,
and the colorManager can then map that pattern based on shadow-values.

