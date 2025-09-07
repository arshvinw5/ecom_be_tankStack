import { Box } from '@/components/ui/box';
import { Card } from '@/components/ui/card';
import { Skeleton, SkeletonText } from './ui/skeleton';

const SkeletonUI = () => {
  return (
    <Box className="flex-1 items-center p-3 ">
      <Card className="mx-auto w-full gap-4 rounded-lg p-5">
        <Box className="gap-2">
          <Skeleton variant="sharp" className="mb-6 h-[240px] w-full rounded-md" />
          <SkeletonText _lines={1} className="h-2 w-20" />
          <SkeletonText _lines={1} className="h-2 w-40" />
          <SkeletonText _lines={3} className="h-2 " />
        </Box>
        <Box className="w-full flex-col gap-2">
          <SkeletonText _lines={1} gap={1} className="h-6" />
          <SkeletonText _lines={1} gap={1} className="h-6" />
        </Box>
      </Card>
    </Box>
  );
};

export default SkeletonUI;
