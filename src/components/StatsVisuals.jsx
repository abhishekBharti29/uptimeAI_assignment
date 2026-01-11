
import Plot from 'react-plotly.js';
import { HEATMAP_MOCK_DATA, RADAR_CHART_MOCK_DATA } from '../utils/constants';
import RepoIcon from "../assets/repo-16.svg";

const StatsVisuals = () => {

  return (
    <div className="stats-visuals-container">
      <div className="stats-visuals-header">
        <span>1,753 contributions in the last year</span>
        <span className="contribution-settings-dropdown">Contribution settings ▼</span>
      </div>
      <div className="stats-visuals">
        <Plot
          data={HEATMAP_MOCK_DATA}
          layout={{ width: 760, height: 240 }}
        />
        <div className='more-stats'>
          <div className='details'>
            <div>
              <button className='details-btn'>@UptimeAI</button>
              <button className='details-btn'>@timescale</button>
            </div>
            <span className='activity-overview-heading'>Activity Overview</span>
            <div className='contri-desc'>
              <img src={RepoIcon} className='repo-icon' />
              <span>Contributed to <strong className='details-txt'>UptimeAI/uptime_webapp, UptimeAI/uptime_server, UptimeAI/uptime_ml </strong> and 13 other repositories</span>
            </div>
          </div>
          <div className='axis-chart'>
            <Plot
              data={RADAR_CHART_MOCK_DATA.data}
              layout={RADAR_CHART_MOCK_DATA.layout}
              className='axis-chart-diagram'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsVisuals;