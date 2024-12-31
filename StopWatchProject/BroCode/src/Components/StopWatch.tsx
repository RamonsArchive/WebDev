/* Name: Ramon McDargh-Mitchell
 * Email: rmcdarghmitchell@ucsd.edu
 * All code present is open source or free to use without restrictions!
 */

interface Props {
  formatTime: () => string; // might cause error, cuase idk what reactNode I'm editing.
  startWatch: () => void;
  pauseWatch: () => void;
  resetWatch: () => void;
}

const StopWatch = ({
  formatTime,
  startWatch,
  pauseWatch,
  resetWatch,
}: Props) => {
  return (
    <>
      <div className="stopwatch-container">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button className="start" onClick={startWatch}>
            Start
          </button>
          <button className="pause" onClick={pauseWatch}>
            Pause
          </button>
          <button className="reset" onClick={resetWatch}>
            End
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
