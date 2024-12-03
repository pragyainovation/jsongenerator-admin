1. General Chart Options

| Option              | Description                                                              | Example Value            |
|---------------------|--------------------------------------------------------------------------|--------------------------|
| responsive          | Adjusts the chart size automatically based on the canvas container size. | true (default)           |
| maintainAspectRatio | Maintains the aspect ratio of the chart when resizing.                   | true , false             |
| aspectRatio         | Specifies the aspect ratio if maintainAspectRatio is true .              | 2 , 1.5                  |
| backgroundColor     | Background color of the chart area.                                      | 'rgba(255, 255, 255, 1)' |
| animation           | Animation configuration for chart rendering.                             | {duration: 1000}         |
| layout              | Padding around the chart.                                                | {padding: 20}            |

2. Axes (Scales)

Common Scale Options:

| Option         | Description                      | Example Value |
|----------------|----------------------------------|---------------|
| beginAtZero    | Ensures the axis starts at zero. | true , false  |
| min            | Minimum value for the axis.      | 0 , -50       |
| max            | Maximum value for the axis.      | 100 , 200     |
| ticks.stepSize | Interval between tick marks.     | 10 , 20       |
| grid.display   | Toggles gridlines.               | true , false  |

Category Scale:

| Option | Description                                | Example Value         |
|--------|--------------------------------------------|-----------------------|
| labels | Labels for categorical data (like months). | ['Jan', 'Feb', 'Mar'] |

3. Legends

| Option          | Description                           | Example Value                       |
|-----------------|---------------------------------------|-------------------------------------|
| display         | Toggles the visibility of the legend. | true , false                        |
| position        | Position of the legend.               | 'top' , 'left' , 'bottom' , 'right' |
| labels.boxWidth | Width of the legend color box.        | 20 , 40                             |

4. Title

| Option   | Description                         | Example Value               |
|----------|-------------------------------------|-----------------------------|
| display  | Toggles the chart title visibility. | true , false                |
| text     | The text of the chart title.        | 'Sales Report'              |
| position | Position of the title.              | 'top' , 'bottom'            |
| font     | Customizes the font of the title.   | {size: 16, family: 'Arial'} |

5. Tooltips

| Option    | Description                                  | Example Value       |
|-----------|----------------------------------------------|---------------------|
| enabled   | Toggles tooltip visibility.                  | true , false        |
| mode      | Determines the interaction mode.             | 'nearest' , 'index' |
| callbacks | Allows custom rendering for tooltip content. | {label: function}   |

6. Hover

| Option            | Description                        | Example Value       |
|-------------------|------------------------------------|---------------------|
| mode              | Determines hover interaction mode. | 'index' , 'nearest' |
| animationDuration | Duration of the hover animation.   | 400 (ms)            |

7. Dataset-Specific Options

| Option          | Description                                              | Example Value             |
|-----------------|----------------------------------------------------------|---------------------------|
| borderColor     | Color of the line or border.                             | 'rgba(255, 99, 132, 1)'   |
| backgroundColor | Background fill color (for bars or area under the line). | 'rgba(255, 99, 132, 0.5)' |
| borderWidth     | Thickness of the border/line.                            | 2 , 4                     |
| fill            | Toggles filling the area under the line.                 | true , false              |
| pointRadius     | Radius of data points (for line charts).                 | 3 , 5                     |

8. Plugins

| Option          | Description                                                     | Example Value           |
|-----------------|-----------------------------------------------------------------|-------------------------|
| plugins.tooltip | Customize tooltips, such as colors, content, and interactivity. | {enabled: true}         |
| plugins.legend  | Customize the legend (position, font, etc.).                    | {position: 'bottom'}    |
| plugins.zoom    | Allows zooming and panning.                                     | {zoom: {enabled: true}} |
