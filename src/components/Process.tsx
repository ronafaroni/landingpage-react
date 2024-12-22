/**
 * @copyright 2024 ronafaroni95
 * @license Apache-2.0
 */

/**
 * node modules
 */
import { motion } from 'motion/react';

/**
 * Constants
 */
import { processData } from '@/constants';

/**
 * Assets
 */
import { processBanner } from '@/assets';

/**
 * Framer Motion Variants
 */
import * as Variants from '@/lib/motionVariants';

const Process = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {processData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {processData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {processData.sectionText}
          </motion.p>
        </div>

        <div className='grid gap-14 lg:grid-cols-2 lg:items-center'>
          <div className='grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon, text, title }, index) => (
              <motion.div
                key={index}
                variants={Variants.staggerContainer}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
              >
                <motion.div
                  className='w-16 h-16 grid place-items-center rounded-full 
                border border-foreground/5 shrink-0'
                  variants={Variants.fadeInScale}
                >
                  {icon}
                </motion.div>
                <motion.div className='grid gap-2 md:gap-3'>
                  <motion.h3
                    className='text-xl gap:text-2xl'
                    variants={Variants.fadeInLeft}
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    className='text-sm text-muted-foreground'
                    variants={Variants.fadeInLeft}
                  >
                    {text}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className='max-lg:-order-1'>
            <motion.figure
              className='mx-auto bg-primary rounded-3xl max-w-[580px]
          overflow-hidden p-8 !pb-0 lg:p-12'
              variants={Variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
            >
              <img
                src={processBanner}
                width={500}
                height={528}
                alt=''
                className='w-full h-full object-contain object-bottom'
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
