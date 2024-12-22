/**
 * @copyright 2024 ronafaroni95
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { motion } from 'motion/react';

/**
 * Components
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

/**
 * Assets
 */
import { blog1, blog2, blog3 } from '@/assets';

/**
 * Constants
 */
import { blogData } from '@/constants';

/**
 * Framer Motion Variants
 */
import * as Variants from '@/lib/motionVariants';

const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {blogData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {blogData.sectionText}
          </motion.p>
        </div>

        <motion.div
          variants={Variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {blogData.blogs.map(
            (
              {
                imgSrc,
                badge,
                title,
                author: { avatarSrc, authorName, publishDate, readingTime },
              },
              index
            ) => (
              <motion.div
                key={index}
                variants={Variants.fadeInUp}
              >
                <Card className='group'>
                  <CardHeader>
                    <figure className='rounded-lg overflow-hidden'>
                      <img
                        src={imgSrc}
                        alt={title}
                        className='img-cover group-hover:scale-105 transition-transform duration-300'
                      />
                    </figure>
                  </CardHeader>

                  <CardContent>
                    <Badge className='mb-3'>{badge}</Badge>
                    <CardTitle className='leading-normal'>
                      <a
                        href='#'
                        className='hover:text-primary transition-colors'
                      >
                        {title}
                      </a>
                    </CardTitle>
                  </CardContent>

                  <CardFooter className='gap-3'>
                    <Avatar>
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className='text-sm mb-0.5'>{authorName}</p>
                      <div className='flex gap-1.5 items-center'>
                        <time
                          dateTime={publishDate}
                          className='text-xs text-muted-foreground'
                        >
                          {publishDate}
                        </time>

                        <span className='w-1 h-1 bg-muted-foreground/50 rounded-full'></span>
                        <p className='text-xs text-muted-foreground'>
                          {readingTime}
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
