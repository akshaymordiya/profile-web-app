import Grid from '@/app/components/Grid'
import React from 'react'
import SlideNav from './Client/Slidernav'

const Testimonial = () => {
  return (
    <>
     <section className="testimonial-area">
          <Grid classNames="container">
            <Grid.Item xs={12} sm={12} md={12} lg={12} xlg={12}>
              <SlideNav />
            </Grid.Item>
          </Grid>
        </section>
    </>
  )
}

export default Testimonial