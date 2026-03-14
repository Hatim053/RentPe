import styles from '../../styles/pagination.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { incrementPage , decrementPage } from '../../ReduxStore/paginationSlice.js';

const Pagination = () => {
  const page = useSelector(state => state.pagination.page);
  const isNextPageAvailable = useSelector(state => state.pagination.nextPage);
  const dispatch = useDispatch();
  
  return (
    <div className={styles.paginationContainer}>
    
      <button disabled = {page==1} className={styles.navButton} onClick = {() => dispatch(decrementPage())}>&lsaquo;</button>

      <div className={styles.pages}>
        <button className={styles.page}>{page-1}</button>
        <button className={`${styles.page} ${styles.active}`}>{page}</button>
        <button className={styles.page}>{page+1}</button>
        <span className={styles.dots}>...</span> 
      </div>

      <button disabled={!isNextPageAvailable} className={styles.navButton} onClick = {() => dispatch(incrementPage())}>&rsaquo;</button>

    </div>
  )
}

export default Pagination